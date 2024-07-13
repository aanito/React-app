import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';

const BlogPost = ({ post, isFeatured }) => {
  const { title, content, imageUrl, date } = post;

  return (
    <div style={{ display: 'flex', flexDirection: isFeatured ? 'column' : 'row', alignItems: 'center', marginBottom: '20px' }}>
      <Card sx={{ width: '100%', maxWidth: isFeatured ? 600 : 300, m: 2 }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          height={isFeatured ? "300" : "140"}
        />
        <CardContent>
          <Typography variant="h6" component="h3">{title}</Typography>
          <Typography>{content}</Typography>
          <Typography variant="body2" color="textSecondary">{date}</Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <Button startIcon={<ThumbUpIcon />} color="primary">Like</Button>
            <Button startIcon={<ShareIcon />} color="primary">Share</Button>
            <Button startIcon={<CommentIcon />} color="primary">Comment</Button>
            {isFeatured && <Button href="#" color="primary">Read More</Button>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPost;
