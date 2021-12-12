import React from 'react';
import './FieldValue.scss';

interface Props {
  field: string,
  value: any,
}

const FieldValue = ({ field, value }: Props) => (
  <div className="field-value">
    <span>{field}</span>
    <span>{value && value.toString()}</span>
  </div>
);

export default FieldValue;
