import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  Create,
  ImageField,
  BulkDeleteWithConfirmButton,
  FunctionField
} from 'react-admin'
import { Button } from 'react-admin'
import axios from '../../../setup/CustomAxios';
import { useRefresh } from 'react-admin';


export const ListProducts = (props) => {

  const refresh = useRefresh ();
  return (
    <List {...props}  >
      <Datagrid bulkActionButtons={false}>
        <TextField source='id' />
        <TextField source='cateName' />
        <ImageField source='image' />
        <TextField source='isDeleted' />
        <EditButton basePath='/products' />
        <FunctionField render={record => (
          <Button style={{ color: "red" }} onClick={async () => {
            await axios.put(`/categories/${record.id}/del`)
            refresh();
          }}>DELETE</Button>
        )} />
  
      </Datagrid>
    </List>
  )
}

export const editProduct = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='cateName' />
      <TextInput source='image' />
    </SimpleForm>
  </Edit>
)

export const createProduct = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='cateName' />
      <TextInput source='image' />
    </SimpleForm>
  </Create>
)