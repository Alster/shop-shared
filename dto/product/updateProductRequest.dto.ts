import {
  ProductAdminDto,
  ProductAttributesDto,
  ProductItemDto,
} from './product.dto';
import { TranslatedText } from '../translated-text';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsObject,
  IsString,
  Min,
} from 'class-validator';
import { CURRENCY } from '../../constants/exchange';
import { SmallMoney } from '../../../shop_shared_server/dto/primitiveTypes';

export class UpdateProductRequestDto implements ProductAdminDto {
  @IsString()
  id?: string;

  @IsObject()
  title!: TranslatedText;

  @IsObject()
  description!: TranslatedText;

  @IsArray()
  categories!: string[];

  @IsObject()
  characteristics!: ProductAttributesDto;

  @IsArray()
  items!: ProductItemDto[];

  @IsObject()
  attrs!: ProductAttributesDto;

  @IsNumber()
  @IsInt()
  @Min(0)
  quantity!: number;

  @IsNumber()
  @IsInt()
  @Min(1)
  price!: SmallMoney;

  @IsNumber()
  @IsInt()
  @Min(0)
  discount!: number;

  @IsString()
  @IsEnum(CURRENCY)
  currency!: string;

  @IsBoolean()
  active!: boolean;

  createDate!: string;
}
