<?php

namespace App\Controller\Api;

use App\Entity\LangVar;
use App\Repository\LangVarRepository;
use App\Resources\Helpers\ApiResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class LangVarController extends AbstractController
{

    public function __construct()
    {
    }

    public function save(
        Request $request,
        LangVarRepository $langVarRepository
    ) {
        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), true);

        if (empty($data['id'])) {
            $types = [
                'lv' => 'lv_translation',
                'eng' => 'eng_translation',
                'ru' => 'ru_translation',
            ];

            foreach ($types as $type => $text) {
                if (!empty($data[$text])) {
                    $langVar = new LangVar();
                    $langVar
                        ->setName($data['name'])
                        ->setLanguage($type)
                        ->setText($data[$text]);

                    $entityManager->persist($langVar);
                }
            }
        } else {
            $langVar = $langVarRepository->getById($data['id']);
            $textType = $langVar->getLanguage() . '_translation';
            $langVar->setText($data[$textType]);

            $entityManager->persist($langVar);
        }

        $entityManager->flush();
    
        return ApiResponse::content(
            ['status' => 'ok'],
        );
    }

    public function list(
        LangVarRepository $langVarRepository
    ): ApiResponse {
        $langVars = $langVarRepository->getAll();

        return ApiResponse::content($langVars);
    }

    public function getById(
        LangVarRepository $langVarRepository,
        $id = null
    ): ApiResponse {
        $langVar = $langVarRepository->getById($id);

        return ApiResponse::content([
            'id' => $langVar->getId(),
            'language' => $langVar->getLanguage(),
            'text' => $langVar->getText(),
            'name' => $langVar->getName(),
        ]);
    }

    public function delete(
        LangVarRepository $langVarRepository,
        $id = null
    ): ApiResponse {
        $langVar = $langVarRepository->getById($id);
        // $langVarsToDelete = $langVarRepository->getAllByName($langVar->getName());
        $entityManager = $this->getDoctrine()->getManager();

        // TODO remove comment if deleting all

        // foreach($langVarsToDelete as $langVar) {
            $entityManager->remove($langVar);
        // }
        $entityManager->flush();

        return ApiResponse::content();
    }
}
