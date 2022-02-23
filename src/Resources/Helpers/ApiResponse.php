<?php

namespace App\Resources\Helpers;

final class ApiResponse extends \Symfony\Component\HttpFoundation\Response
{

    /**
     * @param     $content
     * @param int $httpStatusCode
     * @param int $workTime
     *
     * @return ApiResponse
     */
    public static function content(
        $content = [],
        int $httpStatusCode = self::HTTP_OK,
        int $workTime = 0
    ): ApiResponse {
        return new self(json_encode(
            [
                'content'      => $content,
                'work_time'    => $workTime / 1000 // in seconds
            ],
            $httpStatusCode
        ));
    }

    public static function error(): ApiResponse
    {
        return new self('', self::HTTP_NOT_FOUND);
    }
}
