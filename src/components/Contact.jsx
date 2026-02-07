import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Box,
    Card,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import {
    Phone,
    Email,
    LocationOn,
} from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ContactSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const contactCards = [
        {
            icon: <Phone fontSize="large" />,
            title: "Call Us",
            content: (
                <>
                    <Typography variant="body1" gutterBottom sx={{ color: 'text.primary' }}>
                        0745 188 133
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ color: 'text.primary' }}>
                        +245 748 593 915
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                        0746 310 053
                    </Typography>
                </>
            )
        },
        {
            icon: <Email fontSize="large" />,
            title: "Email Us",
            content: (
                <>
                    <Typography variant="body1" sx={{ color: 'text.primary', wordBreak: 'break-word' }}>
                        infokachrageneralsuppliers.com
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.primary', wordBreak: 'break-word', mt: 1 }}>
                        infokachrageneralsuppliers@gmail.com
                    </Typography>
                </>
            )
        },
        {
            icon: <LocationOn fontSize="large" />,
            title: "Visit Us",
            content: (
                <>
                    <Typography variant="body1" gutterBottom sx={{ color: 'text.primary' }}>
                        Malindi, Kwachocha
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                        Opp. Kurawa Medical Clinic
                    </Typography>
                </>
            )
        }
    ];

    const CardContent = ({ icon, title, content }) => (
        <Card sx={{ 
            height: '300px', 
            width: '100%',
            textAlign: 'center', 
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            boxShadow: 3,
            borderRadius: 2,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6,
            }
        }}>
            <Box
                sx={{
                    display: 'inline-flex',
                    p: 2,
                    borderRadius: '50%',
                    bgcolor: 'secondary.light',
                    color: 'primary.main',
                    mb: 2,
                    width: 70,
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {icon}
            </Box>
            <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                    color: 'primary.main', 
                    fontWeight: 600,
                    minHeight: '32px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {title}
            </Typography>
            <Box sx={{ mt: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {content}
            </Box>
        </Card>
    );

    return (
        <Box id="contact" sx={{ py: 8, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography 
                        variant="h2" 
                        gutterBottom 
                        sx={{ 
                            color: 'primary.main',
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            fontWeight: 700,
                        }}
                    >
                        CONTACT US
                    </Typography>
                    <Box
                        sx={{
                            width: 100,
                            height: 4,
                            bgcolor: 'secondary.main',
                            mx: 'auto',
                            mb: 2,
                        }}
                    />
                    <Typography 
                        variant="h5" 
                        sx={{ 
                            color: 'text.secondary', 
                            mt: 3,
                            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                        }}
                    >
                        Get in touch with us today!
                    </Typography>
                </Box>

                {isMobile ? (
                    <Box sx={{ px: 2 }}>
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{ 
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            style={{ paddingBottom: '50px' }}
                        >
                            {contactCards.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <CardContent 
                                        icon={card.icon}
                                        title={card.title}
                                        content={card.content}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                ) : (
                    <Grid container spacing={4} justifyContent="center">
                        {contactCards.map((card, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <CardContent 
                                    icon={card.icon}
                                    title={card.title}
                                    content={card.content}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </Box>
    );
}