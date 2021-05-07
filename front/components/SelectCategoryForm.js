import { Select } from 'antd';

const SelectCategoryForm = (props) => {

    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
    }

    return (
        <Select size='default' defaultValue="a1" onChange={handleChange} style={{ width: 200 }}>
            {props.value}
        </Select>
    );
}

export default SelectCategoryForm;