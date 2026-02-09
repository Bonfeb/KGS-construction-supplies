import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Chip,
  IconButton,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogContent,
} from "@mui/material";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Close,
} from "@mui/icons-material";

export default function Products() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [openImage, setOpenImage] = useState(null);

  const products = [
    {
      name: "Sand & Stone",
      image: "Sand & Stone.webp",
      description:
        "Premium quality sand and aggregates for all construction needs",
    },
    {
      name: "Steel Bars",
      image: "Steel Bars.webp",
      description: "High-grade reinforcement steel bars in various sizes",
    },
    {
      name: "Iron Sheets",
      image: "Iron Sheets.webp",
      description: "Durable roofing and walling iron sheets",
    },
    {
      name: "Plumbing Items",
      image: "Plumbing.webp",
      description: "Complete range of pipes, fittings, and fixtures",
    },
    {
      name: "Electrical Items",
      image: "Electrical.webp",
      description: "Quality wiring, switches, and electrical accessories",
    },
    {
      name: "Paints & More",
      image: "Paints.webp",
      description: "Wide selection of interior and exterior paints",
    },
    {
      name: "Tools",
      image: "Tools.webp",
      description: "Professional construction and hand tools",
    },
    {
      name: "Accessories",
      image: "Accessories.webp",
      description: "Essential hardware accessories and fasteners",
    },
    {
      name: "Safety Gear",
      image: "Safety Gear.webp",
      description: "Protective equipment for safe construction work",
    },
    {
      name: "Fencing Posts",
      image: "Fencing Posts.webp",
      description: "Sturdy posts for residential and commercial fencing",
    },
    {
      name: "Mesh Wire",
      image: "Wire Mesh.webp",
      description: "Quality mesh wire for fencing and security",
    },
    {
      name: "Hardware",
      image: "Hardware.webp",
      description: "Complete hardware solutions for every project",
    },
  ];

  const additionalProducts = [
    "Cement & Concrete",
    "Timber & Wood",
    "Glass & Mirrors",
    "Doors & Windows",
    "Tiles & Flooring",
    "Insulation Materials",
  ];

  // Group products into sets of 2 for large+ screens
  const groupProducts = (products, size) => {
    const groups = [];
    for (let i = 0; i < products.length; i += size) {
      groups.push(products.slice(i, i + size));
    }
    return groups;
  };

  const productGroups = groupProducts(products, 2);
  const totalSlides = isLargeScreen ? productGroups.length : products.length;

  // Auto slide functionality
  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [autoSlide, totalSlides]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 10000);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 10000);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 10000);
  };

  const handleImageClick = (product) => {
    setOpenImage(product);
  };

  const handleCloseImage = () => {
    setOpenImage(null);
  };

  const ProductCard = ({ product }) => {
    return (
      <Paper
        elevation={6}
        sx={{
          p: 3,
          textAlign: "center",
          height: 380,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease-in-out",
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          bgcolor: "#e8eaed",
          color: "text.primary",
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Box
          onClick={() => handleImageClick(product)}
          sx={{
            mb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 140,
            borderRadius: "12px",
            overflow: "hidden",
            cursor: "pointer",
            transition: "all 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <img
            src={`/${product.image}`}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "primary.main",
            mb: 2,
            fontSize: "1.3rem",
            lineHeight: 1.3,
            minHeight: 32,
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: "1rem",
            lineHeight: 1.6,
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            minHeight: 72,
          }}
        >
          {product.description}
        </Typography>
      </Paper>
    );
  };

  return (
    <Box
      id="products"
      sx={{
        py: { xs: 6, md: 8 },
        background: "linear-gradient(135deg, #1e293b 0%, #1e3a8a 100%)",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            OUR PRODUCTS
          </Typography>
          <Box
            sx={{
              width: 100,
              height: 4,
              bgcolor: "secondary.main",
              mx: "auto",
              mb: 2,
            }}
          />
          <Typography
            variant="h5"
            sx={{
              mt: 3,
              fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
              opacity: 0.95,
              mb: 4,
            }}
          >
            Visit us today for all your construction material needs!
          </Typography>
        </Box>

        {/* Carousel Container */}
        <Box sx={{ position: "relative", mb: 6 }}>
          {/* Navigation Buttons */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: -10, md: -40 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "secondary.main",
              color: "primary.dark",
              "&:hover": {
                bgcolor: "secondary.dark",
              },
              zIndex: 10,
              boxShadow: 3,
            }}
          >
            <ChevronLeft />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: -10, md: -40 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "secondary.main",
              color: "primary.dark",
              "&:hover": {
                bgcolor: "secondary.dark",
              },
              zIndex: 10,
              boxShadow: 3,
            }}
          >
            <ChevronRight />
          </IconButton>

          {/* Carousel Content */}
          <Box
            sx={{
              overflow: "hidden",
              px: { xs: 3, md: 3, lg: 0 },
            }}
          >
            {/* For Small to Medium Screens - Single Card Carousel */}
            {!isLargeScreen ? (
              <Box sx={{ position: "relative", minHeight: 430 }}>
                {products.map((product, index) => (
                  <Box
                    key={product.name}
                    sx={{
                      position: "absolute",
                      width: "100%",
                      transition:
                        "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                      transform:
                        currentSlide === index
                          ? "translateX(0)"
                          : index < currentSlide
                            ? "translateX(-100%)"
                            : "translateX(100%)",
                      opacity: currentSlide === index ? 1 : 0,
                      zIndex: currentSlide === index ? 1 : 0,
                      pointerEvents: currentSlide === index ? "auto" : "none",
                    }}
                  >
                    <ProductCard product={product} />
                  </Box>
                ))}
              </Box>
            ) : (
              /* For Large+ Screens - 2 Cards in Same Row */
              <Box
                sx={{
                  position: "relative",
                  minHeight: 410,
                }}
              >
                {productGroups.map((group, groupIndex) => (
                  <Box
                    key={groupIndex}
                    sx={{
                      position: groupIndex === 0 ? "relative" : "absolute",
                      width: "100%",
                      top: 0,
                      left: 0,
                      opacity: groupIndex === currentSlide ? 1 : 0,
                      transition: "opacity 0.6s ease-in-out",
                      zIndex: groupIndex === currentSlide ? 1 : 0,
                      pointerEvents:
                        groupIndex === currentSlide ? "auto" : "none",
                    }}
                  >
                    <Grid container spacing={4} justifyContent="center">
                      {group.map((product) => (
                        <Grid item xs={12} lg={6} key={product.name}>
                          <ProductCard product={product} />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* Dots Indicator */}
          <Box
            sx={{ display: "flex", justifyContent: "center", mt: 4, gap: 1 }}
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor:
                    currentSlide === index
                      ? "secondary.main"
                      : "rgba(255, 255, 255, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": {
                    bgcolor:
                      currentSlide === index
                        ? "secondary.dark"
                        : "rgba(255, 255, 255, 0.5)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Additional Products Section */}
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            bgcolor: "rgba(15, 23, 42, 0.5)",
            borderRadius: 3,
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(251, 191, 36, 0.2)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "secondary.main",
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              fontWeight: 600,
              mb: 3,
              textAlign: "center",
            }}
          >
            ALSO AVAILABLE:
          </Typography>
          <Grid container spacing={2}>
            {additionalProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Chip
                  icon={<CheckCircle sx={{ fontSize: "1.2rem" }} />}
                  label={product}
                  sx={{
                    bgcolor: "#e8eaed",
                    color: "primary.main",
                    fontWeight: 600,
                    width: "100%",
                    py: { xs: 2.5, md: 3 },
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    transition: "all 0.3s",
                    "&:hover": {
                      bgcolor: "secondary.light",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    },
                    "& .MuiChip-icon": {
                      color: "secondary.main",
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Image Preview Dialog */}
      <Dialog
        open={!!openImage}
        onClose={handleCloseImage}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            overflow: "visible",
          },
        }}
      >
        <IconButton
          onClick={handleCloseImage}
          sx={{
            position: "absolute",
            right: -10,
            top: -10,
            bgcolor: "secondary.main",
            color: "primary.dark",
            "&:hover": {
              bgcolor: "secondary.dark",
            },
            zIndex: 1,
          }}
        >
          <Close />
        </IconButton>
        <DialogContent sx={{ p: 0, overflow: "visible" }}>
          {openImage && (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                bgcolor: "white",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img
                src={`/${openImage.image}`}
                alt={openImage.name}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
              <Box
                sx={{
                  p: 3,
                  bgcolor: "white",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    mb: 1,
                  }}
                >
                  {openImage.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {openImage.description}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
