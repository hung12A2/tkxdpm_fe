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
    SelectInput,
    NumberInput,
    BooleanInput,
    NumberField,
    BooleanField,
    FunctionField
} from 'react-admin';
import { Button } from 'react-admin';

import axios from '../../../setup/CustomAxios';
import { useEffect, useState } from 'react';
import { useRefresh } from 'react-admin';


export const ListDishes = (props) => {

    const refresh = useRefresh();


    return (

        <List {...props}>
            <Datagrid bulkActionButtons={false}>
                <TextField source='id' />
                <TextField source='name' label = "product name" />
                <TextField source='cateName' />
                <TextField source='productDescription' />
                <TextField source='productDetails' />
                <ImageField source='image' />
                <NumberField source='price' />
                <NumberField source='countInStock' label="count stock" />
                <BooleanField source='isBestSeller' label="best seller" />
                <TextField source='isDeleted' />
                <EditButton basePath='/dishes' />
                <FunctionField render={record => (
                    <Button style={{ color: "red" }} onClick={async () => {
                        await axios.put(`/products/${record.id}/del`)
                        refresh();
                      }}>DELETE</Button>
                )} />
            </Datagrid>
        </List>
    )

}
export const EditDishes = (props) => {

    const [categories, setCategories] = useState([]);

    useEffect(async () => {
        const data = await axios.get('categories');
        setCategories(data);
    }, [])

    return (
        <Edit {...props}>
            <SimpleForm className=''>
                <TextInput source='name' className='' />
                <TextInput source='image' />
                <TextInput source='productDescription' />
                <TextInput source='productDetails' />
                <NumberInput source='price' />
                <NumberInput source='countInStock' />
                <BooleanInput source='isBestSeller' />
                <SelectInput
                    source='idOfCategory'
                    label='Category Name'
                    choices={categories}
                    optionText="cateName"
                    optionValue='id'
                ></SelectInput>
            </SimpleForm>
        </Edit>)

}

export const CreateDish = (props) => {

    const [categories, setCategories] = useState([]);

    useEffect(async () => {
        const data = await axios.get('categories');
        setCategories(data);
    }, [])


    return (
        <Create {...props}>

            <SimpleForm className=''>
                <TextInput source='name' className='' />
                <TextInput source='image' />
                <TextInput source='productDescription' />
                <TextInput source='productDetails' />
                <NumberInput source='price' />
                <NumberInput source='countInStock' />
                <BooleanInput source='isBestSeller' />
                <SelectInput
                    source='idOfCategory'
                    label='Category Name'
                    choices={categories}
                    optionText="cateName"
                    optionValue='id'
                ></SelectInput>
            </SimpleForm>
        </Create>)
}
