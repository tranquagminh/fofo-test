import React, { useState } from 'react';

interface ReactionType {
  id: string;
  emoji: string;
  label: string;
  count: number;
}

export default function FeedbackReaction() {
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
  
  const reactions: ReactionType[] = [
    { id: 'thumbs-up', emoji: '👍', label: 'Hữu ích', count: 1 },
    { id: 'heart', emoji: '💚', label: 'Yêu thích', count: 2 },
    { id: 'amazing', emoji: '🤩', label: 'Thú vị', count: 0 },
    { id: 'surprised', emoji: '😮', label: 'Bất ngờ', count: 1 },
    { id: 'boring', emoji: '😒', label: 'Nhàm chán', count: 0 },
    { id: 'angry', emoji: '😡', label: 'Tức giận', count: 0 },
  ];

  const handleReactionClick = (reactionId: string) => {
    setSelectedReaction(reactionId === selectedReaction ? null : reactionId);
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 mb-8">
      <h3 className="text-center text-xl font-medium mb-4">Bạn thấy bài viết như thế nào?</h3>
      <p className="text-center text-gray-500 mb-6">4 phản hồi</p>
      
      <div className="flex justify-center gap-4 flex-wrap">
        {reactions.map((reaction) => (
          <button
            key={reaction.id}
            className={`flex flex-col items-center ${
              selectedReaction === reaction.id ? 'border-2 border-green-500' : ''
            } p-2 rounded-lg hover:bg-gray-50 transition-all w-24`}
            onClick={() => handleReactionClick(reaction.id)}
          >
            <div className="text-3xl mb-1">{reaction.emoji}</div>
            <div className="font-medium text-lg">{reaction.count}</div>
            <div className="text-sm text-gray-600">{reaction.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}