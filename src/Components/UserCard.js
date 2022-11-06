import React from 'react';
import { Card, CardBody } from 'reactstrap';

const UserCard = ({ user }) => {
    return (
        <Card className='text-center mt-3 mb-4'>
            <img src={user.avatar_url} className='img-thumbnail'
            alt='' />
            <CardBody>
                <div className='test-primary'>{user.name}</div>
                <div className='test-primary'>{user.location}</div>
                <div className='test-primary'>{user.bio}</div>
                <div className='test-primary'>{user.twitter_username}</div>
                <div className='text-info'>Available for hire:{user.hireable ? 'yes' : 'no'}</div>
            </CardBody>
        </Card>
    );
};

export default UserCard;