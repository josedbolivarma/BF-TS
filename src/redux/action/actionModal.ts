import { typesModal } from '../types/types'

export const selectedModal = ( codigo: any ) => {
  console.log(codigo);
  return {
      type: typesModal.selected,
      payload: codigo
  }
}