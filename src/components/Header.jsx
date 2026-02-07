import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false); // Close drawer when navigation item is clicked
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Products", id: "products" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "primary.main", zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              onClick={() => scrollToSection("home")}
              src="/KGS_Logo.ico"
              alt="KGS Logo"
              sx={{
                width: "auto",
                height: 32,
                mr: 1,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <Typography
              onClick={() => scrollToSection("home")}
              variant="h5"
              component="div"
              sx={{ fontWeight: 700, color: "white" }}
            >
              KGS KACHRA
            </Typography>
          </Box>

          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton color="inherit" onClick={toggleMobileMenu}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Toolbar spacer to prevent content from going under the fixed AppBar */}
      <Toolbar />

      {/* Mobile Menu Drawer - Only styled for mobile screens */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "background.paper",
          },
        }}
      >
        {/* Drawer Header with Logo and Close Button */}
        <Box
          sx={{
            bgcolor: "primary.main",
            p: 2.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              component="img"
              src="/KGS_Logo.ico"
              alt="KGS Logo"
              sx={{
                width: "auto",
                height: 45,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid",
                borderColor: "secondary.main",
                boxShadow: "0 2px 8px rgba(251, 191, 36, 0.3)",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "white",
                fontSize: "1.1rem",
              }}
            >
              KGS KACHRA
            </Typography>
          </Box>
          <IconButton
            onClick={toggleMobileMenu}
            sx={{
              color: "white",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        {/* Navigation Items */}
        <List sx={{ pt: 2 }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <ListItem
                button
                onClick={() => scrollToSection(item.id)}
                sx={{
                  py: 2,
                  px: 3,
                  borderLeft: "4px solid transparent",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    borderLeftColor: "secondary.main",
                    bgcolor: "rgba(30, 58, 138, 0.08)",
                    "& .MuiListItemText-primary": {
                      color: "primary.main",
                    },
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    color: "text.primary",
                    transition: "color 0.2s ease-in-out",
                  }}
                />
              </ListItem>
              {index < menuItems.length - 1 && (
                <Divider variant="middle" sx={{ my: 0.5 }} />
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
}