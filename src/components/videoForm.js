import React, { useState } from 'react';

const VideoForm = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [subtitleFile, setSubtitleFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [tagColor, setTagColor] = useState('#000000');
  const [videoType, setVideoType] = useState('');

  const handleAddTag = () => {
    if (currentTag) {
      setTags([...tags, { text: currentTag, color: tagColor }]);
      setCurrentTag('');
      setTagColor('#000000');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title, description, videoFile, thumbnailFile, audioFile, subtitleFile, tags, videoType);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="grid grid-cols-3 gap-6 mb-6">  {/* Increased gap */}
        {/* Upload video, Title, Description */}
        <div className="col-span-1 flex flex-col space-y-4">
          <div>
            <label className="font-bold block" htmlFor="videoFile">Upload Video:</label>
            <input type="file" accept=".m3u8" onChange={(e) => setVideoFile(e.target.files[0])} id="videoFile" className="border p-2 rounded-lg w-full" required />
          </div>
          <div>
            <label className="font-bold block" htmlFor="title">Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" className="border p-2 rounded-lg w-full" required />
          </div>
          <div>
            <label className="font-bold block" htmlFor="description">Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" className="border p-2 rounded-lg w-full" rows="5" required />
          </div>
        </div>

        {/* Audio File, Subtitle File */}
        <div className="col-span-1 flex flex-col space-y-4">
          <div>
            <label className="font-bold block" htmlFor="thumbnailFile">Thumbnail:</label>
            <input type="file" accept="image/png, image/jpeg" onChange={(e) => setThumbnailFile(e.target.files[0])} id="thumbnailFile" className="border p-2 rounded-lg w-full" required />

          </div>
          <div>
            <label className="font-bold block" htmlFor="audioFile">Audio File:</label>
            <input type="file" accept=".ts" onChange={(e) => setAudioFile(e.target.files[0])} id="audioFile" className="border p-2 rounded-lg w-full" />
          </div>
          <div>
            <label className="font-bold block" htmlFor="subtitleFile">Subtitle File:</label>
            <input type="file" accept=".vtt" onChange={(e) => setSubtitleFile(e.target.files[0])} id="subtitleFile" className="border p-2 rounded-lg w-full" />
          </div>
          <div>
            <label className="font-bold block" htmlFor="videoType">Type:</label>
            <select
              value={videoType}
              onChange={(e) => setVideoType(e.target.value)}
              id="videoType"
              className="border p-2 rounded-lg w-full"
              required
            >
              <option value="" disabled>Select Type</option>
              <option value="pelicula">Películas</option>
              <option value="video">Videos</option>
            </select>
          </div>
        </div>

        {/* Tags, Tags Color, Tags Preview */}
        <div className="col-span-1 flex flex-col space-y-4">
          <div>
            <label className="font-bold block" htmlFor="tag">Tags:</label>
            <input type="text" value={currentTag} onChange={(e) => setCurrentTag(e.target.value)} placeholder="Tag" id="tag" className="border p-2 rounded-lg w-full" />
          </div>
          <div>
            <label className="font-bold block" htmlFor="tagColor">Tags Color:</label>
            <input type="color" value={tagColor} onChange={(e) => setTagColor(e.target.value)} id="tagColor" className=" w-8 h-8" />  {/* Adjusted width and height */}
          </div>
          <button type="button" onClick={handleAddTag} className="bg-blue-500 text-white rounded-lg p-2 w-full">Add Tag</button>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                style={{ backgroundColor: 'transparent', borderColor: tag.color, color: tag.color }}
                className="py-1 px-2 rounded-md text-[10px] border border-solid w-fit"
              >
                {tag.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mb-4">  {/* Added margin-bottom */}
        <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 w-full">Submit</button>
        <button type="button" onClick={onClose} className="bg-gray-500 text-white rounded-lg p-2 w-full">Cancel</button>
      </div>
    </form>
  );


};

export default VideoForm;
