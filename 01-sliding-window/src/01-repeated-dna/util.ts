// Valid DNA characters
export type DNA = 'A' | 'C' | 'G' | 'T'

// Mapping of DNA characters to numbers
export const mapping : Record<DNA, number> =  {
	'A': 1,
	'C': 2,
	'G': 3,
	'T': 4
}

// memoize coefficients
export const powerOf4 = (exponent: number): number =>
  1 << (exponent * 2)
