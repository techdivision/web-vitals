<?php
namespace Neos\Flow\Persistence\Doctrine\Migrations;

use Doctrine\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;
use Doctrine\DBAL\Migrations\AbortMigrationException;

/**
 * Auto-generated Migration: Please modify to your needs! This block will be used as the migration description if getDescription() is not used.
 */
class Version20200522110843 extends AbstractMigration
{

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return '';
    }

    /**
     * @param Schema $schema
     * @return void
     * @throws AbortMigrationException
     */
    public function up(Schema $schema): void
    {
        // this up() migration is autogenerated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on "mysql".');

        $this->addSql('CREATE TABLE techdivision_webvitals_domain_model_webvitalmeasure (persistence_object_identifier VARCHAR(40) NOT NULL, sitereference VARCHAR(255) NOT NULL, nodereference VARCHAR(255) NOT NULL, nodedimensions VARCHAR(255) NOT NULL, cls DOUBLE PRECISION DEFAULT NULL, fcp DOUBLE PRECISION DEFAULT NULL, fid DOUBLE PRECISION DEFAULT NULL, lcp DOUBLE PRECISION DEFAULT NULL, ttfb DOUBLE PRECISION DEFAULT NULL, entrydate DATETIME NOT NULL, PRIMARY KEY(persistence_object_identifier)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    /**
     * @param Schema $schema
     * @return void
     * @throws AbortMigrationException
     */
    public function down(Schema $schema): void
    {
        // this down() migration is autogenerated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on "mysql".');

        $this->addSql('DROP TABLE techdivision_webvitals_domain_model_webvitalmeasure');
    }
}
