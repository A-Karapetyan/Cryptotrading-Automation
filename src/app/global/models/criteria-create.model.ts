import { OperationTypeEnum } from "../enums/operation-type.enum";
import { Validation } from "../validation";
import { IsDefined, IsNumber, Min } from "../validation/decorators";

export class CriteriaCreateRM extends Validation {

    @IsNumber()
    @IsDefined()
    amount: number;

    @IsNumber()
    @IsDefined()
    cryptoId: number;

    @IsDefined()
    operation: OperationTypeEnum;

    errors = {
        amount: false,
        cryptoId: false,
        operation: false
    };

    getModel() {
        return {
            amount: this.amount,
            cryptoId: this.cryptoId,
            operation: this.operation
        }
    };
}