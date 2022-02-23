<?php

namespace App\Controller\Api;

use App\Resources\Helpers\ApiResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{

    public function __construct()
    {
    }

    public function notValidPath()
    {
        return ApiResponse::error(
            ['status' => 'ok'],
        );
    }
}
