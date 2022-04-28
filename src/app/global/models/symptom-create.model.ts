import { Validation } from "../validation";
import { IsDefined, IsString, MinLength } from "../validation/decorators";
import { CriteriaCreateRM } from "./criteria-create.model";

export class SymptomCrateRM extends Validation {
    @IsDefined()
    @MinLength(1)
    title: string;
    criterias: Array<CriteriaCreateRM> = [new CriteriaCreateRM()];
    userId: number;

    errors = {
        title: false,
        criterias: false,
    }; 

    public validate(): boolean {
        let valid = super.validate();

        this.criterias.forEach(cr => {
           if (!cr.validate()) {
               valid = false;
            }
        })

        return valid;
    }

    getModel() {
        return {
            title: this.title,
            criterias: this.criterias.map(el => el.getModel()),
            userId: this.userId
        }
    }
}