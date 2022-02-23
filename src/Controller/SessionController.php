<?php

namespace App\Controller;

use App\Resources\Helpers\ApiResponse;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Guard\AbstractGuardAuthenticator;

class SessionController extends AbstractGuardAuthenticator
{
    private $entityManager;
    private $router;
    private $passwordEncoder;

    public function __construct(
        EntityManagerInterface $entityManager,
        RouterInterface $router,
        UserPasswordEncoderInterface $passwordEncoder
    ) {
        $this->entityManager = $entityManager;
        $this->router = $router;
        $this->passwordEncoder = $passwordEncoder;
    }

    public function start(Request $request, ?AuthenticationException $authException = null)
    {
        
    }

    public function supportsRememberMe()
    {
        
    }

    public function supports(Request $request)
    {
        return 'api.login' === $request->attributes->get('_route') && $request->isMethod('post');
    }

    public function getCredentials(Request $request)
    {
        $credentials = (array) json_decode($request->getContent());

        $request->getSession()->set(
            Security::LAST_USERNAME,
            $credentials['email']
        );

        return $credentials;
    }

    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['name' => $credentials['name']]);

        return $user;
    }

    public function checkCredentials($credentials, UserInterface $user)
    {
        return $this->passwordEncoder->isPasswordValid($user, $credentials['password']);
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
    {
        $params = (array) json_decode($request->getContent());

        return ApiResponse::content(
            [
                'user_has_access' => true,
                'user' => $params['email']
            ]
        );
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        $params = (array) json_decode($request->getContent());
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['name' => $params['name']]);

        if (!$user) {
            $errorMsg = 'User does not exist';
        } else if (!$this->passwordEncoder->isPasswordValid($user, $params['password'])) {
            $errorMsg = 'Wrong password';
        } else {
            $errorMsg = 'Something went\'t wrong, please try again later';
        }
        
        dump($errorMsg);die();

        return ApiResponse::content(
            [
                'user_has_access' => false,
                'user' => $params['name'],
                'error_message' => $errorMsg
            ]
        );
    }

    protected function getLoginUrl()
    {
        return $this->router->generate('login');
    }
}
