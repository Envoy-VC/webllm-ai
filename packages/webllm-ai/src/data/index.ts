import { WebLLMModelId } from '../types';

export const modelSizes: Record<`${WebLLMModelId}`, number> = {
	'Hermes-2-Pro-Llama-3-8B-q4f16_1-MLC': 4517552128,
	'Hermes-2-Pro-Llama-3-8B-q4f32_1-MLC': 4517552128,
	'Hermes-2-Pro-Mistral-7B-q4f16_1-MLC': 4074497923,
	'Hermes-2-Theta-Llama-3-8B-q4f16_1-MLC': 4517404672,
	'Hermes-2-Theta-Llama-3-8B-q4f32_1-MLC': 4517404672,
	'Hermes-3-Llama-3.1-8B-q4f16_1-MLC': 4517404672,
	'Hermes-3-Llama-3.1-8B-q4f32_1-MLC': 4517404672,
	'Llama-2-13b-chat-hf-q4f16_1-MLC': 7322519563,
	'Llama-2-7b-chat-hf-q4f16_1-MLC': 3791241227,
	'Llama-2-7b-chat-hf-q4f32_1-MLC': 4212908043,
	'Llama-3-70B-Instruct-q3f16_1-MLC': 31776318464,
	'Llama-3-8B-Instruct-q4f16_1-MLC': 4517404672,
	'Llama-3-8B-Instruct-q4f32_1-MLC': 4517404672,
	'Llama-3.1-70B-Instruct-q3f16_1-MLC': 31776318464,
	'Llama-3.1-8B-Instruct-q4f16_1-MLC': 4517404672,
	'Llama-3.1-8B-Instruct-q4f32_1-MLC': 4517404672,
	'Llama-3.2-1B-Instruct-q0f16-MLC': 2471628800,
	'Llama-3.2-1B-Instruct-q0f32-MLC': 2471628800,
	'Llama-3.2-1B-Instruct-q4f16_1-MLC': 695242752,
	'Llama-3.2-1B-Instruct-q4f32_1-MLC': 695242752,
	'Llama-3.2-3B-Instruct-q4f16_1-MLC': 1807423488,
	'Llama-3.2-3B-Instruct-q4f32_1-MLC': 1807423488,
	'Mistral-7B-Instruct-v0.2-q4f16_1-MLC': 4074350467,
	'Mistral-7B-Instruct-v0.3-q4f16_1-MLC': 4077983372,
	'Mistral-7B-Instruct-v0.3-q4f32_1-MLC': 4077983372,
	'NeuralHermes-2.5-Mistral-7B-q4f16_1-MLC': 4074359683,
	'OpenHermes-2.5-Mistral-7B-q4f16_1-MLC': 4074359683,
	'Phi-3-mini-4k-instruct-q4f16_1-MLC': 2150144011,
	'Phi-3-mini-4k-instruct-q4f32_1-MLC': 2150144011,
	'Phi-3.5-mini-instruct-q4f16_1-MLC': 2150144011,
	'Phi-3.5-mini-instruct-q4f32_1-MLC': 2150144011,
	'Phi-3.5-vision-instruct-q4f16_1-MLC': 2769074176,
	'Phi-3.5-vision-instruct-q4f32_1-MLC': 2769074176,
	'Qwen2-0.5B-Instruct-q0f16-MLC': 988065536,
	'Qwen2-0.5B-Instruct-q0f32-MLC': 988065536,
	'Qwen2-0.5B-Instruct-q4f16_1-MLC': 277996288,
	'Qwen2-1.5B-Instruct-q4f16_1-MLC': 868547584,
	'Qwen2-1.5B-Instruct-q4f32_1-MLC': 868547584,
	'Qwen2-7B-Instruct-q4f16_1-MLC': 4284263424,
	'Qwen2-7B-Instruct-q4f32_1-MLC': 4284263424,
	'Qwen2-Math-1.5B-Instruct-q4f16_1-MLC': 868547584,
	'Qwen2-Math-1.5B-Instruct-q4f32_1-MLC': 868547584,
	'Qwen2-Math-7B-Instruct-q4f16_1-MLC': 4284263424,
	'Qwen2-Math-7B-Instruct-q4f32_1-MLC': 4284263424,
	'Qwen2.5-0.5B-Instruct-q0f16-MLC': 988065536,
	'Qwen2.5-0.5B-Instruct-q0f32-MLC': 988065536,
	'Qwen2.5-0.5B-Instruct-q4f16_1-MLC': 277996288,
	'Qwen2.5-0.5B-Instruct-q4f32_1-MLC': 277996288,
	'Qwen2.5-1.5B-Instruct-q4f16_1-MLC': 868547584,
	'Qwen2.5-1.5B-Instruct-q4f32_1-MLC': 868547584,
	'Qwen2.5-3B-Instruct-q4f16_1-MLC': 1736187904,
	'Qwen2.5-3B-Instruct-q4f32_1-MLC': 1736187904,
	'Qwen2.5-7B-Instruct-q4f16_1-MLC': 4284263424,
	'Qwen2.5-7B-Instruct-q4f32_1-MLC': 4284263424,
	'Qwen2.5-Coder-0.5B-Instruct-q0f16-MLC': 988065536,
	'Qwen2.5-Coder-0.5B-Instruct-q0f32-MLC': 988065536,
	'Qwen2.5-Coder-0.5B-Instruct-q4f16_1-MLC': 277996288,
	'Qwen2.5-Coder-0.5B-Instruct-q4f32_1-MLC': 277996288,
	'Qwen2.5-Coder-1.5B-Instruct-q4f16_1-MLC': 868547584,
	'Qwen2.5-Coder-1.5B-Instruct-q4f32_1-MLC': 868547584,
	'Qwen2.5-Coder-3B-Instruct-q4f16_1-MLC': 1736187904,
	'Qwen2.5-Coder-3B-Instruct-q4f32_1-MLC': 1736187904,
	'Qwen2.5-Coder-7B-Instruct-q4f16_1-MLC': 4284263424,
	'Qwen2.5-Coder-7B-Instruct-q4f32_1-MLC': 4284263424,
	'Qwen2.5-Math-1.5B-Instruct-q4f16_1-MLC': 868547584,
	'Qwen2.5-Math-1.5B-Instruct-q4f32_1-MLC': 868547584,
	'RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC': 1563781120,
	'RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC': 1738526720,
	'SmolLM2-1.7B-Instruct-q4f16_1-MLC': 962793472,
	'SmolLM2-1.7B-Instruct-q4f32_1-MLC': 962793472,
	'SmolLM2-135M-Instruct-q0f16-MLC': 269030016,
	'SmolLM2-135M-Instruct-q0f32-MLC': 269030016,
	'SmolLM2-360M-Instruct-q0f16-MLC': 723642240,
	'SmolLM2-360M-Instruct-q0f32-MLC': 723642240,
	'SmolLM2-360M-Instruct-q4f16_1-MLC': 203614080,
	'SmolLM2-360M-Instruct-q4f32_1-MLC': 203614080,
	'TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC': 619416331,
	'TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC': 619416331,
	'TinyLlama-1.1B-Chat-v1.0-q4f16_1-MLC': 619409419,
	'TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC': 619409419,
	'WizardMath-7B-V1.1-q4f16_1-MLC': 4074350467,
	'gemma-2-2b-it-q4f16_1-MLC': 1492681432,
	'gemma-2-2b-it-q4f32_1-MLC': 1492681432,
	'gemma-2-2b-jpn-it-q4f16_1-MLC': 1492681552,
	'gemma-2-2b-jpn-it-q4f32_1-MLC': 1492681552,
	'gemma-2-9b-it-q4f16_1-MLC': 5221089832,
	'gemma-2-9b-it-q4f32_1-MLC': 5221089832,
	'gemma-2b-it-q4f16_1-MLC': 1431549952,
	'gemma-2b-it-q4f32_1-MLC': 1431549952,
	'phi-1_5-q4f16_1-MLC': 798633984,
	'phi-1_5-q4f32_1-MLC': 798633984,
	'phi-2-q4f16_1-MLC': 1564948480,
	'phi-2-q4f32_1-MLC': 1564948480,
	'stablelm-2-zephyr-1_6b-q4f16_1-MLC': 925540352,
	'stablelm-2-zephyr-1_6b-q4f32_1-MLC': 925540352,
};