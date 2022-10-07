import React from 'react';
import { DateTimePicker } from "@material-ui/pickers";
import FormHelperText from '@material-ui/core/FormHelperText'
import moment from 'moment'
import { FormGroup, Label } from 'reactstrap';
import { IconButton, InputAdornment } from "@material-ui/core";

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText className='mt-2' style={{ color: '#f44336' }}>{touched && error}</FormHelperText>
    }
}

const RenderDatePicker = ({ label, icon, hide, classNameField, input, meta: { touched, error } }) => {
    const { value, onChange } = input
    console.log('value===', value, input)
    const selectedDate = typeof value == 'object' ? new Date(value) : null
    console.log('selectedDate', selectedDate)
    return (
        <FormGroup style={{ display: hide === true ? 'none' : '' }}>
            {label && <Label className='mb-2' for={label}>{label}</Label>}
            <div className="input-group input-group-merge">

                <DateTimePicker
                    {...input}
                    value={value ? value : null}
                    autoOk
                    ampm={false}
                    animateYearScrolling
                    variant='dialog'
                    inputVariant='outlined'
                    // autoOk
                    error={touched && error}
                    format='yyyy-MM-dd HH:mm'

                    className={classNameField}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <IconButton>

                                    <span className={`ti-${icon}`}></span>

                                </IconButton>
                            </InputAdornment>
                        ),
                    }}

                />

            </div>
            {renderFromHelper({ touched, error })}
        </FormGroup>
    );
}

export default RenderDatePicker;