import React from "react";
import {Container, Typography, AppBar, Toolbar, Button} from '@material-ui/core';


class App extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Typography align="center" variant="h2">
                        Another To Do List
                    </Typography>
                </Container>
                <Container id="menu">
                    <AppBar position="static">
                        <Toolbar>
                            <Button variant="contained" color="secondary">
                                Create a Note
                            </Button>
                        </Toolbar>
                    </AppBar>
                </Container>
                <Container>

                </Container>
            </div>
        );
    }
}

export default App;