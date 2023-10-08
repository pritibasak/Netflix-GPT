import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true, //it's needed because openai key was not hidden
});

export default openai;

/*
After setting up this openai object from the secret key,
we can use the openai chat API directly which will help us for movie search.
*/