<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\Component\Serializer\Annotation;

use Symfony\Component\Serializer\Exception\InvalidArgumentException;

/**
 * Annotation class for @Context().
 *
 * @Annotation
 * @Target({"PROPERTY", "METHOD"})
 *
 * @author Maxime Steinhausser <maxime.steinhausser@gmail.com>
 */
#[\Attribute(\Attribute::TARGET_PROPERTY | \Attribute::TARGET_METHOD | \Attribute::IS_REPEATABLE)]
final class Context
{
    private $context;
    private $normalizationContext;
    private $denormalizationContext;
    private $groups;

    /**
     * @throws InvalidArgumentException
     */
    public function __construct(array $options = [], array $context = [], array $normalizationContext = [], array $denormalizationContext = [], array $groups = [])
    {
        if (!$context) {
            if (!array_intersect((array_keys($options)), ['normalizationContext', 'groups', 'context', 'value', 'denormalizationContext'])) {
                // gracefully supports context as first, unnamed attribute argument if it cannot be confused with Doctrine-style options
                $context = $options;
            } else {
                // If at least one of the options match, it's likely to be Doctrine-style options. Search for the context inside:
                $context = $options['value'] ?? $options['context'] ?? [];
            }
        }

        $normalizationContext = $options['normalizationContext'] ?? $normalizationContext;
        $denormalizationContext = $options['denormalizationContext'] ?? $denormalizationContext;

        foreach (compact(['context', 'normalizationContext', 'denormalizationContext']) as $key => $value) {
            if (!\is_array($value)) {
                throw new InvalidArgumentException(sprintf('Option "%s" of annotation "%s" must be an array.', $key, static::class));
            }
        }

        if (!$context && !$normalizationContext && !$denormalizationContext) {
            throw new InvalidArgumentException(sprintf('At least one of the "context", "normalizationContext", or "denormalizationContext" options of annotation "%s" must be provided as a non-empty array.', static::class));
        }

        $groups = (array) ($options['groups'] ?? $groups);

        foreach ($groups as $group) {
            if (!\is_string($group)) {
                throw new InvalidArgumentException(sprintf('Parameter "groups" of annotation "%s" must be a string or an array of strings. Got "%s".', static::class, get_debug_type($group)));
            }
        }

        $this->context = $context;
        $this->normalizationContext = $normalizationContext;
        $this->denormalizationContext = $denormalizationContext;
        $this->groups = $groups;
    }

    public function getContext(): array
    {
        return $this->context;
    }

    public function getNormalizationContext(): array
    {
        return $this->normalizationContext;
    }

    public function getDenormalizationContext(): array
    {
        return $this->denormalizationContext;
    }

    public function getGroups(): array
    {
        return $this->groups;
    }
}
