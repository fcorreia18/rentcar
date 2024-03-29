import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterTableUserDeleteUserName1661868853626
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        const username = await queryRunner.hasColumn("users", "username");
        if (username) {
            await queryRunner.dropColumn("users", "username");
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "username",
                type: "varchar",
                isUnique: true,
                isNullable: true,
            })
        );
    }
}
