import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useState } from "react";


export function Counter() {
 
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (

    <div className="counter-container">
      {/* Count Likes */}
      <IconButton color="success" aria-label="delete" onClick={() => setLike(like + 1)}>  {/* Count Likes */}
        <Badge badgeContent={like} color="success">👍

        </Badge>
      </IconButton>
      <IconButton color="error" aria-label="delete" onClick={() => setDislike(dislike + 1)}>  {/* Count DisLikes */}
        <Badge badgeContent={dislike} color="error">👎

        </Badge>
      </IconButton>

    </div>
  );
}