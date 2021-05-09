import { Select } from 'antd';
import styled from 'styled-components'

const SelectCategoryForm = (props) => {

    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
    }

    const SelectStyle = styled(Select)`
        margin: 1rem;
    `;

    return (
        <SelectStyle size='default' defaultValue="a1" onChange={handleChange} style={{ width: 200 }}>
            {props.value}
        </SelectStyle>
    );
}

export default SelectCategoryForm;