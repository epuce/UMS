<?php
namespace App\Controller\Api;

use App\Repository\LanguageRepository;
use App\Resources\Helpers\ApiResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class LanguageController extends AbstractController {

    public function list(
        LanguageRepository $languageRepository
    ) {
        return ApiResponse::content($languageRepository->getAll());
    }
}