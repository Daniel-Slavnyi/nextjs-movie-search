// import { NextApiRequest, NextApiResponse } from "next";

// interface MyData {
//   Title: string;
//   Year: string;
//   imdbID: string;
//   Type: string;
//   Poster: string;
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<MyData[]>
// ) {
//   const { inputValue } = req.query;

//   // Формируем URL запроса к внешнему API, используя значение inputValue
//   const url = `http://www.omdbapi.com/?s=${inputValue}&apikey=e04bdb05`;

//   try {
//     // Получаем данные из внешнего API
//     const response = await fetch(url);
//     const data = await response.json();

//     // Проверяем, что данные получены успешно и имеют нужную структуру
//     if (data.Response === "True" && Array.isArray(data.Search)) {
//       // Извлекаем первый результат из массива Search
//       const myDataArray: MyData[] = data.Search.map((result: any) => ({
//         Title: result.Title,
//         Year: result.Year,
//         imdbID: result.imdbID,
//         Type: result.Type,
//         Poster: result.Poster,
        
//     }));
    
//     res.status(200).json(myDataArray)
     

//       // Отправляем данные в ответе
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { inputValue,page } = req.query;

  // Формируем URL запроса к внешнему API, используя значение inputValue
  const url = `http://www.omdbapi.com/?s=${inputValue}&page=${page}&apikey=e04bdb05`;

  try {
    // Получаем данные из внешнего API и отправляем их в ответе
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
}