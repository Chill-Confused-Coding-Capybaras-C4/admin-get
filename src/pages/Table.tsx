import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

export const TablePage = () => {

  const [users, setUsers] = useState<usersData[]>([]);



    type usersData = {
        firstName: string;
        lastName: string;
        tcsid: string;
        email: string;
        createdTS: string;
    }

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios.get("https://c4-back.azurewebsites.net/form", {
        headers: { 'key': 'c4forever!' }
      });
      console.log(result.data)
      
      setUsers(result.data);
      
    }



console.log(users);

    fetchData();

  }, []);


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
      {users?.map((value, index) => {
                        return <tr key={index}>
                            <td >{index}</td>
                            <td >{value.firstName}</td>
                            <td >{value.lastName}</td>
                            <td >{value.email}</td>
                            <td >{value.createdTS}</td>
                        </tr>

                    })}
      </tbody>
    </Table>
  );
}

