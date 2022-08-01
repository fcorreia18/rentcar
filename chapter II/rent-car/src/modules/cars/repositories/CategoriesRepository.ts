import { ICreateCategoryDTO } from "../dtos/CreateCategoryDTO";
import { Category } from "../model/Category";

export class CategoriesRepository {
    private categories: Category[];
    // eslint-disable-next-line no-use-before-define
    private static INSTANCE: CategoriesRepository;
    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository {
        if (!this.INSTANCE) {
            this.INSTANCE = new CategoriesRepository();
        }
        return this.INSTANCE;
    }

    public create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });
        this.categories.push(category);
    }

    public list(): Category[] {
        return this.categories;
    }

    public findByName(name: string) {
        return this.categories.find((category) => category.name === name);
    }
}
