import React from 'react';
import { NavLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import GradingIcon from '@mui/icons-material/Grading';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SendIcon from '@mui/icons-material/Send';
import ReviewsIcon from '@mui/icons-material/Reviews';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupOffIcon from '@mui/icons-material/GroupOff';
import PeopleIcon from '@mui/icons-material/People';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Divider, Toolbar, ListItemIcon, Box } from '@mui/material';

const drawerWidth = 240;

const links = [
  { title: 'DASHBOARD', path: '/', icon: <HomeIcon />, dividerAfter: true },
  { title: 'PROPOSAL', path: '/proposal', icon: <AddIcon />, dividerAfter: false },
  { title: 'New', path: '/proposal/new', icon: <AddCircleIcon />, dividerAfter: false },
  { title: 'Update', path: '/proposal/update', icon: <EditIcon />, dividerAfter: false },
  { title: 'Change Order', path: '/proposal/change-order', icon: <EditDocumentIcon />, dividerAfter: false },
  { title: 'Awarded', path: '/proposal/awarded', icon: <EmojiEventsIcon />, dividerAfter: true },
  { title: 'FORMS', path: '/forms', icon: <AddIcon />, dividerAfter: false },
  { title: 'Risk Matrix', path: '/forms/risk-matrix', icon: <ReportProblemIcon />, dividerAfter: false },
  { title: 'Site Safety Plan', path: '/forms/site-safety-plan', icon: <HealthAndSafetyIcon />, dividerAfter: false },
  { title: 'Safety Tailboard', path: '/forms/safety-tailboard', icon: <SafetyCheckIcon />, dividerAfter: true },
  { title: 'SELREV', path: '/selrev', icon: <AddIcon />, dividerAfter: false },
  { title: 'New Review', path: '/selrev/new-review', icon: <GradingIcon />, dividerAfter: false },
  { title: 'Open Reviews', path: '/selrev/open-reviews', icon: <MenuOpenIcon />, dividerAfter: false },
  { title: 'Checklists', path: '/selrev/checklists', icon: <ChecklistIcon />, dividerAfter: false },
  { title: 'Transmittal', path: '/selrev/transmittal', icon: <SendIcon />, dividerAfter: false },
  { title: 'Qualified Reviewers', path: '/selrev/qualified-reviewers', icon: <ReviewsIcon />, dividerAfter: true },
  { title: 'MEETING MINUTES', path: '/meeting-minutes', icon: <AddIcon />, dividerAfter: false },
  { title: 'Internal Kickoff', path: '/meeting-minutes/internal-kickoff', icon: <GroupOffIcon />, dividerAfter: false },
  { title: 'External Kickoff', path: '/meeting-minutes/external-kickoff', icon: <GroupsIcon />, dividerAfter: false },
  { title: 'Internal', path: '/meeting-minutes/internal', icon: <PeopleOutlineIcon />, dividerAfter: false },
  { title: 'External', path: '/meeting-minutes/external', icon: <PeopleIcon />, dividerAfter: true },
  { title: 'PROJECT MANAGEMENT', path: '/project-management', icon: <AddIcon />, dividerAfter: false },
  { title: 'Schedules', path: '/project-management/schedules', icon: <EventNoteIcon />, dividerAfter: false },
  { title: 'Lessons Learned', path: '/project-management/lessons-learned', icon: <CastForEducationIcon />, dividerAfter: false },
  { title: 'Communication Plan', path: '/project-management/communication-plan', icon: <ConnectWithoutContactIcon />, dividerAfter: false },
  { title: 'Upload 3rd Party Quote', path: '/procurement/upload-quote', icon: <RequestQuoteIcon />, dividerAfter: true },
  { title: 'DMS', path: '/dms', icon: <AddIcon />, dividerAfter: false },
];

type Props = {
  open: boolean;
}

export default function LeftNavBar({ open }: Props){

  return (
    <Box sx={{display: 'flex'}}>
      
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : 60,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: open ? drawerWidth : 60, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <div>
          <List dense>
            {links.map(({ title, path, icon, dividerAfter }) => (
              <React.Fragment key={path}>
                <ListItem>
                  <ListItemButton component={NavLink} to={path} sx={{ pl: 4 }}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={title} sx={{ fontSize: '0.75 rem' }} />
                  </ListItemButton>
                </ListItem>
                {dividerAfter && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </div>
      </Drawer>
    </Box>
  );
};


