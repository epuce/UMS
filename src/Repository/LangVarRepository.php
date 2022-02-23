<?php

namespace App\Repository;

use App\Entity\LangVar;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method LangVar|null find($id, $lockMode = null, $lockVersion = null)
 * @method LangVar|null findOneBy(array $criteria, array $orderBy = null)
 * @method LangVar[]    findAll()
 * @method LangVar[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LangVarRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LangVar::class);
    }

    public function getAll()
    {
        return $this->createQueryBuilder('l')
            ->getQuery()
            ->getArrayResult();
    }

    public function getById($id): LangVar
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getSingleResult();
    }

    public function getAllByName($name): array
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.name = :name')
            ->setParameter('name', $name)
            ->getQuery()
            ->getResult();
    }

    // /**
    //  * @return LangVar[] Returns an array of LangVar objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?LangVar
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
