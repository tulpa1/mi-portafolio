import React, {useState, useEffect} from "react";
import {db} from "../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import {Link} from "react-router-dom";
import styles from "../components/ProjectGrid.module.css";

//importar componentes de Material UI
import {Container,Box,Typography,CircularProgress} from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function ProjectGrid(){
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {  
        const fetchProjects = async () => {
            try{
                setLoading(true);
                const querySnapshot = await getDocs(collection(db, "projects"));
                const projectsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            setProjects(projectsData);
            setError(null);
            }catch (err) {
                setError(err.message);
            }finally {
                setLoading(false);
            }
        };
        fetchProjects();
     }, [])


     const handleDelete = async (id) => {
        if (window.confirm('Esta seguro de eliminar este proyecto?')){
            try{
                await deleteDoc(doc(db, "projects", id));
                setProjects(projects.filter(project => project.id !== id));
                alert("Proyecto eliminado correctamente");
            }catch (err) {
                setError(err.message);  
            }
     }
    }

    return(
        <Container maxWidth="lg" sx={{ mt: 5, mb:5, pt: '80px'}} className="container_projects">
            <Typography variant="h4" component="h2" align="center" gutterBottom sx={{mb: 4, color: 'primary.dark'}}>
                Administrar Proyectos
            </Typography>

            {loading && (
                <Box sx={{display: 'flex', justifyContent: 'center', mt: 4}}>
                    <CircularProgress />
                    <Typography variant="body1" sx={{ml:2}}>Cargando Proyectos...</Typography>
                </Box>
            )}

            {error && (
                <Typography color="error" align="center" sx={{mt: 4, color: 'text.secondary'}}>
                    {error}
                </Typography>
            )}

            {!loading && !error && projects.length === 0 && (
                <Typography variant="h6" align="center" sx={{mt: 4, color: 'text.secondary'}}>
                    No hay proyectos disponibles.
                </Typography>
            )}

            {!loading && !error && projects.length > 0 && (
                <TableContainer component={Paper}>
                    <table sx={{ minWidth: 650 }} size ="small" aria-label="a desen table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Descripción</TableCell>
                                <TableCell>imagen</TableCell>
                                <TableCell>Repositorio</TableCell>
                                <TableCell>Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {projects.map((project) => (
                                <TableRow key={project.id}>
                                    <TableCell component="th" scope="row">
                                        {project.title}
                                    </TableCell>
                                    <TableCell>{project.description}</TableCell>
                                    <TableCell>
                                        <img src={project.image} alt={project.name} className={styles.imgproject} />
                                    </TableCell>
                                    <TableCell>
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                            Ver Repositorio
                                        </a>
                                    </TableCell>
                                    <TableCell>
                                        <Link to={`/edit/${project.id}`} className={styles.editButton}>
                                            Editar
                                        </Link>
                                        <button onClick={() => handleDelete(project.id)} className={styles.deleteButton}>
                                            Eliminar
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </table>
                </TableContainer>
            )}

        </Container>
    );
}

export default ProjectGrid;

