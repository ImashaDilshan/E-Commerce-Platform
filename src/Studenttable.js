import { TableContainer, TableHead } from "@mui/material";

const Studenttable = (props) => {
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.students.map((student) => (
                    <TableRow key={student.id}>
                        <TableCell>{student.firstName}</TableCell>
                        <TableCell>{student.lastName}</TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>{student.phoneNumber}</TableCell>
                        <TableCell>{student.address}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>


    </TableContainer>




}

export default Studenttable;