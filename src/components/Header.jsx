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
  const isExtraSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Products", id: "products" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: "primary.main", 
          zIndex: theme.zIndex.drawer + 1,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <Toolbar 
          sx={{ 
            minHeight: { xs: 56, sm: 64 },
            px: { xs: 1.5, sm: 2, md: 3 },
            py: { xs: 0.5, sm: 1 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              cursor: "pointer",
              minWidth: 0, // Allows text to shrink
            }}
            onClick={() => scrollToSection("home")}
          >
            <Box
              component="img"
              src="/KGS_Logo.ico"
              alt="KGS Logo"
              sx={{
                width: "auto",
                height: { xs: 28, sm: 32, md: 36 },
                mr: { xs: 0.75, sm: 1, md: 1.5 },
                borderRadius: "50%",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <Typography
              variant="h5"
              component="div"
              sx={{ 
                fontWeight: 700, 
                color: "white",
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                letterSpacing: { xs: "0.5px", sm: "1px" },
              }}
            >
              KGS KACHRA
            </Typography>
          </Box>

          {!isMobile ? (
            <Box sx={{ display: "flex", gap: { md: 1.5, lg: 2 } }}>
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "0.9rem", lg: "1rem" },
                    px: { md: 1.5, lg: 2 },
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton 
              color="inherit" 
              onClick={toggleMobileMenu}
              sx={{
                ml: 1,
                p: { xs: 0.75, sm: 1 },
              }}
            >
              <MenuIcon sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem" } }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Toolbar spacer to prevent content from going under the fixed AppBar */}
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }} />

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        PaperProps={{
          sx: {
            width: { xs: "auto", sm: 280 },
            minWidth: { xs: 240, sm: 280 },
            maxWidth: { xs: "85%", sm: 320 },
            bgcolor: "background.paper",
            top: { xs: 56, sm: 64 }, // Start below the AppBar
            height: "auto", // Auto height based on content
            maxHeight: { xs: "calc(100% - 56px)", sm: "calc(100% - 64px)" },
            boxShadow: "-4px 0 12px rgba(0,0,0,0.15)",
            borderRadius: "8px 0 0 8px",
            overflow: "visible",
          },
        }}
        sx={{
          zIndex: theme.zIndex.drawer, // Below the AppBar
        }}
      >
        {/* Close Icon Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: { xs: 1, sm: 1.5 },
            borderBottom: "1px solid",
            borderColor: "divider",
            bgcolor: "background.default",
          }}
        >
          <IconButton
            onClick={toggleMobileMenu}
            size="small"
            sx={{
              color: "primary.main",
              "&:hover": {
                bgcolor: "rgba(30, 58, 138, 0.08)",
              },
            }}
          >
            <CloseIcon sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" } }} />
          </IconButton>
        </Box>

        {/* Navigation Items */}
        <List sx={{ pt: 0, pb: 1 }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <ListItem
                button
                onClick={() => scrollToSection(item.id)}
                sx={{
                  py: { xs: 2, sm: 2.25 },
                  px: { xs: 2.5, sm: 3 },
                  borderLeft: "4px solid transparent",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    borderLeftColor: "secondary.main",
                    bgcolor: "rgba(30, 58, 138, 0.08)",
                    "& .MuiListItemText-primary": {
                      color: "primary.main",
                      transform: "translateX(4px)",
                    },
                  },
                  "&:active": {
                    bgcolor: "rgba(30, 58, 138, 0.12)",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: { xs: "1.05rem", sm: "1.1rem" },
                    color: "text.primary",
                    transition: "all 0.2s ease-in-out",
                  }}
                />
              </ListItem>
              {index < menuItems.length - 1 && (
                <Divider variant="middle" sx={{ my: 0 }} />
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
}