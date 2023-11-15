import React from 'react'
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
function raven() {
    const now = 50;
  return (
    <div>     `
         <ProgressBar now={now} label={`${now}%`} />;
        ` <Button variant="primary">Primary</Button>{' '}
    <Button variant="secondary">Secondary</Button>{' '}
    <Button variant="success">Success</Button>{' '}
    <Button variant="warning">Warning</Button>{' '}
    <Button variant="danger">Danger</Button>{' '}
    <Button variant="info">Info</Button>{' '}
    <Button variant="light">Light</Button>{' '}
    <Button variant="dark">Dark</Button>
    <Button variant="link">Link</Button>

       
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Maria</td>
          <td>David</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jonina</td>
          <td>David</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  
  )
}


export default raven
