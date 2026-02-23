// API作成テスト
// req = HTTP 受信メッセージ、res = HTTP サーバー応答
export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}