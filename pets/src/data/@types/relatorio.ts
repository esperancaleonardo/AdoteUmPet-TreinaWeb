import { Pet } from './pet';

export interface Relatorio{
  id: number;
  email: string;
  value: string;
  pet: Pet;
}