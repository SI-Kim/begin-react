import React from 'react';

export const User = ({ user }) => {
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    );
}

export const UserList = ({ users}) => {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}