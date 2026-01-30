---
title: Coding and analyzing data
linkTitle: Analyzing data
date: "2021-04-08"
type: book
summary: Coding language data — Analyzing performance — Interpreting qualitative data — Analyzing quantitative data
---

## Coding and analyzing data

### 4.1. Coding language data

### 4.2. Analyzing performance

### 4.3. Interpreting qualitative data

### 4.4. Analyzing quantitative data

#### Statistical software

- ==**[Jamovi](https://www.jamovi.org/)**==
  - simple + free
  - highly recommended, except if you already have experience with another one
  - plugins for more advanced analyses
  - based on R, so allows for a transition to R if you need full power in the future
- **JASP**: free, user-friendly interface, based on R
- **SPSS**: commercial, expensive
- **Stata**: commercial for advanced analyses
- **R** with [RStudio](https://www.rstudio.com/products/rstudio/download/): very powerful but very steep learning curve

##### Jamovi: tutorials and guides

- [Jamovi user guide](https://www.jamovi.org/user-manual.html) (website + videos)
- [Full Jamovi Tutorial](https://datalab.cc/jamovi/) by Datalab (video tutorial)
  {% include video.liquid path="https://www.youtube.com/embed/mZomeS0tLxY" class="img-fluid rounded z-depth-1" title="Full Jamovi Tutorial" %}
- [Learning statistics with jamovi](https://www.learnstatswithjamovi.com/) (free book)

#### Descriptive statistics

- Objective: _data reduction_ (how to better summarize all the individual data?)
- 2 main components:
  - **central tendency**
  - **variation**

|                                               | Central tendency       | Variation                                             |
| --------------------------------------------- | ---------------------- | ----------------------------------------------------- |
| If normal distribution<br>($N ≥ 20$ + normal) | **Mean** ($M$)         | **Standard deviation** ($\text{SD}$)                  |
| Otherwise                                     | **Median**<br> Mode... | **Range** (min & max)<br>Interquartile range (IQR)... |

#### Inferential statistics

##### Correlation

- Objective: determine similarity between two (typically continuous) variables
- ### Correlation coefficient: Pearson's $r$
  or Spearman's $\rho$ (rho) if not normally distributed
  - from -1 (perfect negative correlation)...
    to 0 (no correlation)...
    to 1 (perfect correlation)

##### Group comparison

- Objective: determine if experimental treatment was significantly different than control

###### Significance test

(‘Null hypothesis significance testing’, NHST)

- **$t$-test** (Student) for 2 groups
- **ANOVA** for multiple conditions/comparisons

![](https://www.psychdb.com/_media/teaching/stats_cheat_sheet.png)
Statistical tests cheat sheet (PsychDB.com)

- → $p$-value
  - Convention: 95% confidence
  - $p < 0.05$ = significant, $p < 0.01$ = better, $p < 0.001$ = even better
  - if $p > 0.05$, then no significant difference

###### Effect size

- Beyond significance: evaluate the size of the effect
- Measures:
  - Pearson's $r$ (correlation)
  - Cohen's $d$ (and Hedges' $g$, very similar)
    $$d = \frac{M_\text{exp} - M_\text{control}}{\textit{SD}_\text{pooled}}$$

## Presenting and discussing results

### 5.1. Presenting results

### 5.2. Discussing results

### 5.3. Concluding
