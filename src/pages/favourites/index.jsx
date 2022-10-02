import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import {removeFromFavsAction, emptyFavAction} from '../../redux/favourites/action'

function Index() {
  const dispatch = useDispatch()
  const favs = useSelector((state) => state.favourites);

  const removeFromFavaourites = (driver) => {
    dispatch(removeFromFavsAction(driver))
  }

  const emptyFavs = ()=> {
    dispatch(emptyFavAction())
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
      <button onClick={()=> emptyFavs()} style={{marginBottom:'10px'}}>Empty</button>
      {favs && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ minWidth: 170 }}>Driver Name</TableCell>
                  <TableCell style={{ minWidth: 170 }}>
                    Permanent Number
                  </TableCell>
                  <TableCell style={{ minWidth: 170 }}>Nationality</TableCell>
                  <TableCell style={{ minWidth: 170 }}>DOB</TableCell>
                  <TableCell style={{ minWidth: 170 }}>Information</TableCell>
                  <TableCell style={{ minWidth: 170 }}>Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {favs?.map((driver, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                      style={
                        driver.permanentNumber
                          ? { backgroundColor: "white" }
                          : { backgroundColor: "red" }
                      }
                    >
                      <TableCell
                        style={
                          driver.permanentNumber
                            ? { color: "black" }
                            : { color: "white" }
                        }
                      >{`${driver.givenName} ${driver.familyName}`}</TableCell>
                      <TableCell
                        style={
                          driver.permanentNumber
                            ? { color: "black" }
                            : { color: "white" }
                        }
                      >
                        {driver.permanentNumber}
                      </TableCell>
                      <TableCell
                        style={
                          driver.permanentNumber
                            ? { color: "black" }
                            : { color: "white" }
                        }
                      >
                        {driver.nationality}
                      </TableCell>
                      <TableCell
                        style={
                          driver.permanentNumber
                            ? { color: "black" }
                            : { color: "white" }
                        }
                      >
                        {driver.dateOfBirth}
                      </TableCell>
                      <TableCell>
                        <a
                          href={driver.url}
                          style={
                            driver.permanentNumber
                              ? { color: "black", textDecoration: "underline" }
                              : { color: "white", textDecoration: "underline" }
                          }
                          target="_blank"
                        >
                          Info
                        </a>
                      </TableCell>
                      <TableCell
                        style={{ cursor: "pointer" }}
                        onClick={() => removeFromFavaourites(driver)}
                      >
                        Remove
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Container>
  );
}

export default Index;
