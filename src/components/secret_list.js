import React from 'react';
import auth from '../hoc/auth';

const SecretList = props => (
    <div>
        <h2 className="align-center">Secret Operatives</h2>
        <ol>
            <li>Ryan</li>
            <li>Llewelyn</li>
            <li>Hazel</li>
            <li>Laura</li>
            <li>Jace</li>
        </ol>
    </div>
);

export default auth(SecretList);