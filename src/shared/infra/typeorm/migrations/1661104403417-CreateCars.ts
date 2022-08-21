import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateCars1661104403417 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cars',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
            generationStrategy: 'increment',
          },
          {
            name: 'model',
            type: 'varchar',
          },
          {
            name: 'licensePlate',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'userId',
            type: 'int',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deletedAt',
            type: 'timestamp',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FKUserCar',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['userId'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cars');
  }
}
