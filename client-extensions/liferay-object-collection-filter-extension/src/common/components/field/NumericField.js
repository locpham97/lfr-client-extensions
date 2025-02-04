import React, {useEffect, useState} from 'react';
import ClayDropdown from "@clayui/drop-down";
import ClayButton from "@clayui/button";
import NumericItem from "../item/NumericItem";

const NumericField = ({fieldName, fieldType, onUpdateFilter}) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    useEffect(() => {
        if(max > min) {
            onUpdateFilter(fieldName, fieldType, [min,max]);
        }

    }, [min, max]);

    return (
        <ClayDropdown
            className="dropdown-menu-width-shrink"
            trigger={
                <ClayButton
                    displayType="secondary"
                    className="bg-light font-weight-normal form-control-select text-left w-100"
                >
                    {`min=${min} and max=${max}`}
                </ClayButton>
            }
        >
            <div>
                <NumericItem name="min" label="Min" fieldName={fieldName} fieldType={fieldType} onChange={setMin}/>
                <NumericItem name="max" label="Max" fieldName={fieldName} fieldType={fieldType} onChange={setMax}/>
            </div>
        </ClayDropdown>
    )
}
export default NumericField