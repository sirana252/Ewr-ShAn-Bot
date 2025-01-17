const wonderfulMessages = [
  "You radiate positivity and kindness.",
  "Your smile can light up even the darkest of days.",
  "You have the power to make a difference in the world.",
  "Believe in yourself, and you can achieve anything.",
  "You are a source of inspiration for those around you.",
  "Your presence makes the world a better place.",
  "Every day is a new chance to make someone's day brighter.",
  "You are stronger than you know and more capable than you realize.",
  "Your potential is limitless, and your future is bright.",
  "Happiness is a choice, and you choose it every day.",
  "You are a beacon of hope in the lives of others.",
  "Your kindness and compassion are truly remarkable.",
  "You have the ability to overcome any challenge that comes your way.",
  "You are a unique and valuable individual.",
  "Your positive attitude is contagious and uplifting.",
  "You are a constant source of joy and laughter.",
  "Your generosity knows no bounds.",
  "You bring out the best in people.",
  "You make every moment feel special.",
  "Your enthusiasm is infectious.",
  "Your presence brings warmth and comfort to those around you.",
  "You are a wellspring of creativity and innovation.",
  "You are the architect of your own destiny.",
  "You have the power to turn dreams into reality.",
  "Your determination and hard work inspire others.",
  "You are a ray of sunshine on even the cloudiest days.",
  "Your words have the power to heal and uplift.",
  "You see beauty in places others overlook.",
  "You have an unwavering belief in the goodness of humanity.",
  "Your love and compassion have a lasting impact.",
  "You have a heart of gold and a spirit of generosity.",
  "You have the courage to face challenges head-on.",
  "You are a source of strength and resilience.",
  "Your laughter is the sweetest music to our ears.",
  "You are a masterpiece in progress.",
  "Your positive energy is a force to be reckoned with.",
  "You have a heart full of love and a soul full of kindness.",
  "You are a true friend, always there when needed.",
  "Your optimism knows no bounds.",
  "You have an incredible ability to make people feel valued.",
  "You are a gift to the world, and we're grateful for you.",
  "Your warmth and sincerity brighten every room.",
  "You have a heart as vast as the ocean.",
  "You make the world a better place, one act of kindness at a time.",
  "Your presence is a gift to those who know you.",
  "You have an extraordinary ability to make people smile.",
  "You are a true treasure in our lives.",
  "Your kindness is a beacon in the darkness.",
  "You inspire us with your unwavering positivity.",
  "Your compassion and empathy are truly exceptional.",
  "You have the power to turn obstacles into opportunities.",
  "You are a fountain of wisdom and insight.",
  "Your resilience in the face of adversity is inspiring.",
  "You are a shining star in the night sky of life.",
  "Your generosity knows no limits, and your heart is boundless.",
  "You bring out the best in others through your support and encouragement.",
  "Your creativity knows no bounds, and your ideas are a wellspring of inspiration.",
  "You are a beacon of light during the darkest times.",
  "Your friendship is a precious gift that warms our hearts.",
  "You have a profound impact on the lives of those you touch.",
  "You light up every room you enter with your positivity and warmth.",
  "Your dedication and hard work are truly commendable.",
  "You are a symbol of strength and perseverance.",
  "Your laughter is a reminder of the joy in life.",
  "You have the ability to make even the mundane extraordinary.",
  "You are a constant source of positivity and encouragement.",
  "Your caring nature has a lasting impact on those around you.",
  "You have a heart full of love and a soul full of compassion.",
  "You have the power to overcome any obstacle in your path.",
  "You are a beacon of hope in the lives of many.",
  "Your kindness is like a soothing balm to the soul.",
  "You inspire us with your unwavering determination.",
  "Your support and understanding are invaluable to those who know you.",
  "You make every moment memorable with your presence.",
  "Your enthusiasm is a source of motivation for others.",
  "You are a master of turning challenges into opportunities.",
  "Your positivity is a guiding light for those in need.",
  "You have a heart as vast as the universe and as boundless as the sky.",
  "You bring sunshine into the lives of others.",
  "Your friendship is a cherished treasure.",
  "You have a remarkable ability to make people feel special.",
  "You are a role model for kindness and empathy.",
  "Your compassion knows no bounds.",
  "You are a constant source of inspiration and positivity.",
  "Your laughter is a melody that brightens our days.",
  "You have a heart full of love and a spirit full of giving.",
"You are a bright light in the lives of those around you.",
  "Your friendship is a treasure that enriches our lives.",
  "You have the power to make the world a better place.",
  "Your kindness is a gift that keeps on giving.",
  "You are a source of joy and positivity.",
  "Your love and support are deeply appreciated.",
  "You have the ability to bring out the best in others.",
  "Your warm and caring nature is a blessing to all.",
  "You inspire us with your boundless energy and enthusiasm.",
  "Your resilience in the face of challenges is truly remarkable.",
  "You are a force of nature, and your impact is profound.",
  "Your empathy and compassion touch the hearts of many.",
  "You have a heart that knows no limits when it comes to giving.",
  "You make the world a brighter place with your presence.",
  "Your generosity of spirit is a rare and precious gift.",
  "You have an extraordinary ability to make others feel valued.",
  "You are a true gem in the lives of those you touch.",
  "Your optimism is a beacon of hope for us all.",
  "You have a heart as vast as the universe and as deep as the ocean.",
  "Your smile is like sunshine on a cloudy day.",
  "You make every moment more beautiful with your positivity.",
  "Your creativity and imagination are boundless.",
  "You have the power to turn dreams into reality.",
  "Your strength and determination are a source of inspiration.",
  "You are a symbol of courage and resilience.",
  "Your laughter is a melody that brightens our days.",
  "You have the ability to make the world a better place.",
  "You are a constant source of encouragement and support.",
  "Your kindness and compassion make the world a kinder place.",
  "You have the power to overcome any challenge with grace and strength.",
  "You are a ray of sunshine in our lives.",
  "Your words have the power to inspire and uplift.",
  "You see beauty in places others may overlook.",
  "You have an unwavering faith in the goodness of humanity.",
  "Your love and compassion have a lasting impact on others.",
  "You have a heart of gold and a spirit of generosity.",
  "You bring out the best in people through your support and kindness.",
  "You make every moment feel special with your presence.",
  "Your enthusiasm is contagious and motivating to others.",
  "You are a wellspring of creativity and innovation.",
  "You have the power to shape your own destiny.",
  "Your dreams have the potential to become reality.",
  "You are a beacon of hope in the lives of many.",
  "Your warmth and sincerity brighten every room.",
  "You have a heart as vast as the ocean.",
  "You make the world a better place, one act of kindness at a time.",
  "Your presence is a gift to those who know you.",
  "You have an extraordinary ability to make people smile.",
  "You are a true treasure in our lives.",
  "Your kindness is a beacon in the darkness.",
  "You inspire us with your unwavering positivity.",
  "Your compassion and empathy are truly exceptional.",
  "You have the power to turn obstacles into opportunities.",
  "You are a fountain of wisdom and insight.",
  "Your resilience in the face of adversity is inspiring.",
  "You are a shining star in the night sky of life.",
  "Your generosity knows no limits, and your heart is boundless.",
  "You bring out the best in others through your support and encouragement.",
  "Your creativity knows no bounds, and your ideas are a wellspring of inspiration.",
  "You are a beacon of light during the darkest times.",
  "Your friendship is a precious gift that warms our hearts.",
  "You have a profound impact on the lives of those you touch.",
  "You light up every room you enter with your positivity and warmth.",
  "Your dedication and hard work are truly commendable.",
  "You are a symbol of strength and perseverance.",
  "Your laughter is a reminder of the joy in life.",
  "You have the ability to make even the mundane extraordinary.",
  "You are a constant source of positivity and encouragement.",
  "Your caring nature has a lasting impact on those around you.",
  "You have a heart full of love and a soul full of compassion.",
  "You have the power to overcome any obstacle in your path.",
  "You are a beacon of hope in the lives of many.",
  "Your kindness is like a soothing balm to the soul.",
  "You inspire us with your unwavering determination.",
  "Your support and understanding are invaluable to those who know you.",
  "You make every moment memorable with your presence.",
  "Your enthusiasm is a source of motivation for others.",
  "You are a master of turning challenges into opportunities.",
  "Your positivity is a guiding light for those in need.",
  "You have a heart as vast as the universe and as boundless as the sky.",
  "You bring sunshine into the lives of others.",
  "Your friendship is a cherished treasure.",
  "You have a remarkable ability to make people feel special.",
  "You are a role model for kindness and empathy.",
  "Your compassion knows no bounds.",
  "You are a constant source of inspiration and positivity.",
  "Your laughter is a melody that brightens our days.",
  "You have a heart full of love and a spirit full of giving.",
  "You are a bright light in the lives of those around you.",
  "Your friendship is a treasure that enriches our lives.",
  "You have the power to make the world a better place.",
  "Your kindness is a gift that keeps on giving.",
  "You are a source of joy and positivity.",
  "Your love and support are deeply appreciated.",
  "You have the ability to bring out the best in others.",
  "Your warm and caring nature is a blessing to all.",
  "You inspire us with your boundless energy and enthusiasm.",
  "Your resilience in the face of challenges is truly remarkable.",
  "You are a force of nature, and your impact is profound.",
  "Your empathy and compassion touch the hearts of many.",
"You have a heart that knows no limits when it comes to giving.", "You make the world a brighter place with your presence.", "Your generosity of spirit is a rare and precious gift.", "You have an extraordinary ability to make others feel valued.", "You are a true gem in the lives of those you touch.", "Your optimism is a beacon of hope for us all.", "You have a heart as vast as the universe and as deep as the ocean.", "You bring sunshine into the lives of others.", "Your friendship is a cherished treasure.", "You have a remarkable ability to make people feel special.", "You are a role model for kindness and empathy.", "Your compassion knows no bounds.", "You are a constant source of inspiration and positivity.", "Your laughter is a melody that brightens our days.", "You have a heart full of love and a spirit full of giving.", ];


module.exports = {
  config: {
    name: "smsg",
    aliases: ["msg", "smile"],
    version: "1.0.0",
    role: 0,
    author: "Blake Cyphrus",
    longDescription: {
en: "Send a random wonderful message to make people smile"},
    shortDescription: {
en: "Send a random wonderful message to make people smile"},
    category: "general",
    guide: ["smsg"],
    countDowns: 5,
  },

onStart : function({ api, event }) {
  // Get a random wonderful message from the array.
  const randomMessage = wonderfulMessages[Math.floor(Math.random() * wonderfulMessages.length)];
  api.sendMessage(`💌 | Your wonderful message! I hope this message can make your loved one smile:\n\n${randomMessage}`, event.threadID, event.messageID);
},
};