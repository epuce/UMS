<?php
namespace App\Controller\Api;

use App\Entity\User;
use App\Resources\Helpers\ApiResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Stopwatch\Stopwatch;

class UserController extends AbstractController {

    public function __construct() {

    }

    public function save(
        Request $request,
        $id = null
    ) {
        $entityManager = $this->getDoctrine()->getManager();
        $stopWatch = (new Stopwatch())->start(__METHOD__);

        $data = json_decode($request->getContent(), true);

        if ($id !== null) {
//            $user = $userStorage->getById($id);
        } else {
            $user = new User();
            $user->setMd5(md5(time().$data['email']));
        }

        $user
            ->setEmail($data['email'])
            ->setPassword($data['password']);

        $entityManager->persist($user);
        $entityManager->flush();

        return ApiResponse::content(
            ['status' => 'ok'],
            200,
            $stopWatch->stop()->getDuration()
        );
    }
}