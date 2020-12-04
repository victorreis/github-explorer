import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { validateGithubUsername } from '../../../Utils/validators';

const UserSearchField = (props) => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [isValidUsername, setIsValidUsername] = useState(true);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        if (!e.target.value || validateGithubUsername(e.target.value)) {
            setIsValidUsername(true);
        } else {
            setIsValidUsername(false);
        }
    };
    const classes = ['mr-sm-2', isValidUsername ? '' : 'is-invalid'];

    const handleSearch = () => {
        // eslint-disable-next-line fp/no-mutating-methods
        history.push(username);
    };

    return (
        <Form inline>
            <FormControl
                type="text"
                placeholder="Search"
                className={classes.join(' ')}
                value={username}
                onChange={handleUsernameChange}
            />
            <Button
                variant="outline-success"
                onClick={handleSearch}
                disabled={!isValidUsername}>
                Search
            </Button>
        </Form>
    );
};

export default UserSearchField;
