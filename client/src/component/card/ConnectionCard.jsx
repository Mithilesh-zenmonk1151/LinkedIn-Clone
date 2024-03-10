import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ConnectionCard() {
    const [open, setOpen] = React.useState(true);
    const acptedData = useSelector((state)=>state.connection?.acceptedData)
    const navigate = useNavigate()
    const count = acptedData?.length;

    const handleClick = () => {
        setOpen(!open);
    };
    const handleShowConnection=()=>{
     navigate('/connectedusers',{state:{acptedData}} )
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 300,height:'max-content', bgcolor: 'background.paper', borderRadius: 2 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{ fontSize: 16, fontWeight: 400 ,pt:0,pb:0 }}>
                    Manage my network
                </ListSubheader>
            }
        >
            <ListItemButton sx={{ fontSize: 20 ,pt:0 , pb:0, width:'300px'}}>
                <ListItemIcon>
                <PeopleAltIcon/>
                </ListItemIcon>
                <ListItemText onClick={handleShowConnection}
                sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems:'center', color: '#666666' }} primary="Connections" secondary={count} />

            </ListItemButton>


       



            <Collapse in={open} timeout="auto" unmountOnExit >
                <List component="div" disablePadding>
                    <ListItemButton  sx={{ fontSize: 20 ,pt:0 , pb:0}}>
                        <ListItemIcon>
                          <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{  color: '#666666' }} primary="Following & followers" />
                    </ListItemButton>

                    <ListItemButton  sx={{ fontSize: 20 ,pt:0 , pb:0}}>
                        <ListItemIcon>
                           <GroupsIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{  color: '#666666' }} primary="Groups" />
                    </ListItemButton>

                    <ListItemButton  sx={{ fontSize: 20 ,pt:0 , pb:0}}>
                        <ListItemIcon>
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemText sx={{  color: '#666666' }} primary="Events" />
                    </ListItemButton>


                    <ListItemButton  sx={{ fontSize: 20 ,pt:0 , pb:0}}>
                        <ListItemIcon>
                            <DescriptionOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems:'center', color: '#666666' }} primary="Pages"  secondary="60"/>
                    </ListItemButton>


                    <ListItemButton  sx={{ fontSize: 20 ,pt:0 , pb:0}}>
                        <ListItemIcon>
                            <ArticleOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center',color: '#666666' }} primary="Newsletters"  secondary='8'/>
                    </ListItemButton>

                    <ListItemButton  sx={{ fontSize: 20 ,pt:0 , pb:0}}>
                        <ListItemIcon>
                            <TagOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText sx={{  color: '#666666' }} primary="Hashtags" />
                    </ListItemButton>

                </List>
            </Collapse>
            
            <ListItemButton onClick={handleClick} sx={{width:'max-content'}}>
                
                <ListItemText sx={{mr:'10px'}} primary={open ? 'ShowLess' : 'ShowMore'} > </ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />} 
                
            </ListItemButton>
        </List>
    );
}