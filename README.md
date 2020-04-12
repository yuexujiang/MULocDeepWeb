# MULocDeepWeb

## System

Ubuntu 16.04

## Framework

NodeJS Express

## Path Configuration

In MULocDeep/predict.py, change two paths to relative path to current calling script.

line 276:
```python
psiblast_cline = NcbipsiblastCommandline(query=inputfile, db='./MULocDeep/db/swissprot/swissprot',num_iterations=3, evalue=0.001, out_ascii_pssm=pssmfile, num_threads=4)
```

line 396: 
```python
model_small.load_weights('./MULocDeep/cpu_models/fold' + str(foldnum) + '_big_lv1_acc-weights.hdf5')
```

## To do List

~~1. Modify the display page~~
~~2. change the display of result JSON data~~
~~3. modify the example page~~
~~4. add features to tables in example pages~~ 
5. new email
6. add some locations on the map
7. fix the the number of total query bug
8. Add CONTACT page
9. Add some introduction
10.  search ID ? IP