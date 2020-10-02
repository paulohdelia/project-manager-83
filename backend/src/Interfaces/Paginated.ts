export default interface IPaginated<T> {
  data: T[];
  page: number;
  elements: number;
  elementsPerPage: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
}
