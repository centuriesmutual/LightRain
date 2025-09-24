import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, VStack, HStack, Text, IconButton, Avatar, Button, useColorModeValue } from '@chakra-ui/react';
import { FaHeart, FaComment, FaShare, FaBookmark, FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaUserPlus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const MotionBox = motion(Box);

interface VideoData {
  id: string;
  username: string;
  avatar: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isBookmarked: boolean;
  videoUrl: string;
  duration: string;
}

export default function ForYou() {
  const router = useRouter();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [videos, setVideos] = useState<VideoData[]>([
    {
      id: '1',
      username: 'dancequeen_nyc',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      title: 'Late Night Dance Session',
      description: 'Just vibing to some beats at 2 AM 🕺✨',
      likes: 12500,
      comments: 892,
      shares: 156,
      isLiked: false,
      isBookmarked: false,
      videoUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop',
      duration: '0:45'
    },
    {
      id: '2',
      username: 'cooking_master',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      title: 'Quick Pasta Recipe',
      description: '5-minute pasta that tastes like heaven 🍝',
      likes: 8900,
      comments: 445,
      shares: 78,
      isLiked: true,
      isBookmarked: false,
      videoUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=600&fit=crop',
      duration: '1:20'
    },
    {
      id: '3',
      username: 'travel_vibes',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      title: 'Sunset in Santorini',
      description: 'This view never gets old 🌅',
      likes: 15600,
      comments: 1203,
      shares: 234,
      isLiked: false,
      isBookmarked: true,
      videoUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=600&fit=crop',
      duration: '0:30'
    },
    {
      id: '4',
      username: 'fitness_guru',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      title: 'Morning Workout',
      description: 'Start your day right! 💪',
      likes: 9800,
      comments: 567,
      shares: 89,
      isLiked: true,
      isBookmarked: false,
      videoUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop',
      duration: '2:15'
    }
  ]);

  const handleLike = (videoId: string) => {
    setVideos(prev => prev.map(video => 
      video.id === videoId 
        ? { 
            ...video, 
            isLiked: !video.isLiked,
            likes: video.isLiked ? video.likes - 1 : video.likes + 1
          }
        : video
    ));
  };

  const handleBookmark = (videoId: string) => {
    setVideos(prev => prev.map(video => 
      video.id === videoId 
        ? { ...video, isBookmarked: !video.isBookmarked }
        : video
    ));
  };

  const handleFollow = (username: string) => {
    // Handle follow logic
    console.log(`Following ${username}`);
  };

  const handleScroll = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0 && currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
    } else if (e.deltaY < 0 && currentVideoIndex > 0) {
      setCurrentVideoIndex(prev => prev - 1);
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const currentVideo = videos[currentVideoIndex];

  return (
    <Box 
      bg="black" 
      minH="100vh" 
      color="white"
      onWheel={handleScroll}
      overflow="hidden"
    >
      {/* Header */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg="rgba(0,0,0,0.8)"
        backdropFilter="blur(10px)"
        py={4}
      >
        <Container maxW="container.sm">
          <Flex justify="center" align="center">
            <Text fontSize="lg" fontWeight="bold">
              For You
            </Text>
          </Flex>
        </Container>
      </Box>

      {/* Video Container */}
      <Box position="relative" h="100vh" pt="80px">
        <AnimatePresence mode="wait">
          <MotionBox
            key={currentVideoIndex}
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Video Background */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgImage={`url('${currentVideo.videoUrl}')`}
              bgSize="cover"
              bgPosition="center"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bg: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
                zIndex: 1,
              }}
            />

            {/* Video Content */}
            <Container maxW="container.sm" position="relative" zIndex={2} h="100%" display="flex" alignItems="flex-end" pb={8}>
              <Flex w="100%" justify="space-between" align="flex-end">
                {/* Left Side - Video Info */}
                <VStack align="start" spacing={4} maxW="70%">
                  <VStack align="start" spacing={2}>
                    <HStack spacing={3}>
                      <Avatar 
                        src={currentVideo.avatar} 
                        size="md" 
                        border="2px solid white"
                      />
                      <VStack align="start" spacing={0}>
                        <Text fontWeight="bold" fontSize="md">
                          @{currentVideo.username}
                        </Text>
                        <Button
                          size="sm"
                          variant="outline"
                          borderColor="white"
                          color="white"
                          _hover={{ bg: 'white', color: 'black' }}
                          leftIcon={<FaUserPlus />}
                          onClick={() => handleFollow(currentVideo.username)}
                        >
                          Follow
                        </Button>
                      </VStack>
                    </HStack>
                  </VStack>
                  
                  <VStack align="start" spacing={2}>
                    <Text fontSize="lg" fontWeight="semibold">
                      {currentVideo.title}
                    </Text>
                    <Text fontSize="sm" color="gray.300">
                      {currentVideo.description}
                    </Text>
                  </VStack>
                </VStack>

                {/* Right Side - Action Buttons */}
                <VStack spacing={6} align="center">
                  {/* Like */}
                  <VStack spacing={1}>
                    <IconButton
                      aria-label="Like"
                      icon={<FaHeart />}
                      size="lg"
                      variant="ghost"
                      color={currentVideo.isLiked ? 'red.500' : 'white'}
                      _hover={{ bg: 'whiteAlpha.200' }}
                      onClick={() => handleLike(currentVideo.id)}
                    />
                    <Text fontSize="xs" fontWeight="bold">
                      {formatNumber(currentVideo.likes)}
                    </Text>
                  </VStack>

                  {/* Comment */}
                  <VStack spacing={1}>
                    <IconButton
                      aria-label="Comment"
                      icon={<FaComment />}
                      size="lg"
                      variant="ghost"
                      color="white"
                      _hover={{ bg: 'whiteAlpha.200' }}
                    />
                    <Text fontSize="xs" fontWeight="bold">
                      {formatNumber(currentVideo.comments)}
                    </Text>
                  </VStack>

                  {/* Share */}
                  <VStack spacing={1}>
                    <IconButton
                      aria-label="Share"
                      icon={<FaShare />}
                      size="lg"
                      variant="ghost"
                      color="white"
                      _hover={{ bg: 'whiteAlpha.200' }}
                    />
                    <Text fontSize="xs" fontWeight="bold">
                      {formatNumber(currentVideo.shares)}
                    </Text>
                  </VStack>

                  {/* Bookmark */}
                  <VStack spacing={1}>
                    <IconButton
                      aria-label="Bookmark"
                      icon={<FaBookmark />}
                      size="lg"
                      variant="ghost"
                      color={currentVideo.isBookmarked ? 'yellow.400' : 'white'}
                      _hover={{ bg: 'whiteAlpha.200' }}
                      onClick={() => handleBookmark(currentVideo.id)}
                    />
                  </VStack>
                </VStack>
              </Flex>
            </Container>

            {/* Video Controls */}
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={3}>
              <IconButton
                aria-label={isPlaying ? "Pause" : "Play"}
                icon={isPlaying ? <FaPause /> : <FaPlay />}
                size="xl"
                variant="ghost"
                color="white"
                bg="rgba(0,0,0,0.5)"
                _hover={{ bg: 'rgba(0,0,0,0.7)' }}
                onClick={() => setIsPlaying(!isPlaying)}
              />
            </Box>

            {/* Volume Control */}
            <Box position="absolute" bottom={4} left={4} zIndex={3}>
              <IconButton
                aria-label={isMuted ? "Unmute" : "Mute"}
                icon={isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                size="md"
                variant="ghost"
                color="white"
                bg="rgba(0,0,0,0.5)"
                _hover={{ bg: 'rgba(0,0,0,0.7)' }}
                onClick={() => setIsMuted(!isMuted)}
              />
            </Box>

            {/* Duration */}
            <Box position="absolute" bottom={4} right={4} zIndex={3}>
              <Text fontSize="sm" bg="rgba(0,0,0,0.7)" px={2} py={1} borderRadius="md">
                {currentVideo.duration}
              </Text>
            </Box>
          </MotionBox>
        </AnimatePresence>
      </Box>

      {/* Progress Indicator */}
      <Box position="fixed" right={4} top="50%" transform="translateY(-50%)" zIndex={1000}>
        <VStack spacing={2}>
          {videos.map((_, index) => (
            <Box
              key={index}
              w="4px"
              h="20px"
              bg={index === currentVideoIndex ? 'white' : 'whiteAlpha.300'}
              borderRadius="full"
              cursor="pointer"
              onClick={() => setCurrentVideoIndex(index)}
            />
          ))}
        </VStack>
      </Box>
    </Box>
  );
}
